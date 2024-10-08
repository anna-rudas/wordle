import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../context/context";
import GameResultModal from "../../modals/GameResultModal/GameResultModal";
import LoadingGame from "../../loaders/LoadingGame/LoadingGame";
import WarningModal from "../../modals/WarningModal/WarningModal";
import ErrorModal from "../../modals/ErrorModal/ErrorModal";
import LoadingSecondary from "../../loaders/LoadingSecondary/LoadingSecondary";
import {
  generalErrorMsg,
  invalidSubmitWarning,
  wordLength,
  numberOfTries,
} from "../../../data/constants";
import PageWrapper from "../../templates/PageWrapper/PageWrapper";
import GameContent from "../../features/GameContent/GameContent";

function MainPage() {
  const {
    currentRow,
    setCurrentRow,
    currentColumn,
    setCurrentColumn,
    inputLetters,
    setInputLetterValue,
    solutionWordDefinition,
    isInputWordValid,
    isFetching,
    setIsFetching,
    isWordInvalidWarning,
    isGameOver,
    isLoading,
    resetGame,
    isStatisticsModalOpen,
    isHowToPlayModalOpen,
    clearInvalidWordWarningTimeout,
  } = useContext(AppContext);

  const isKeyInputAllowed = () => {
    return (
      !isGameOver &&
      !isStatisticsModalOpen &&
      !isHowToPlayModalOpen &&
      !isLoading &&
      !isFetching
    );
  };

  const handleKeyEvent = async (event: KeyboardEvent) => {
    if (isKeyInputAllowed()) {
      if (currentRow < numberOfTries) {
        //check key is not space
        if (event.key != " ") {
          if (event.key === "Backspace") {
            if (
              inputLetters[currentRow][currentColumn] === "" &&
              currentColumn !== 0
            ) {
              setInputLetterValue("", true);
              setCurrentColumn(currentColumn - 1);
            } else {
              setInputLetterValue("");
            }
          } else if (event.key === "Enter") {
            clearInvalidWordWarningTimeout();
            setIsFetching(true);
            const isInputWordValidResult = await isInputWordValid(currentRow);
            setIsFetching(false);
            if (!isInputWordValidResult) {
              return;
            }

            setCurrentRow(currentRow + 1);
            setCurrentColumn(0);
          } else if (event.key.length === 1) {
            setInputLetterValue(event.key.toLocaleUpperCase());
            if (currentColumn !== wordLength - 1) {
              setCurrentColumn(currentColumn + 1);
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  });

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <PageWrapper>
      <>
        <GameContent />
        {isGameOver && <GameResultModal />}
        {isLoading && <LoadingGame />}
        {isWordInvalidWarning && (
          <WarningModal warningMessage={invalidSubmitWarning} />
        )}
        {!isLoading && !solutionWordDefinition && (
          <ErrorModal errorMessage={generalErrorMsg} />
        )}
        {isFetching && <LoadingSecondary />}
      </>
    </PageWrapper>
  );
}

export default MainPage;
