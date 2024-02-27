import styles from './feature-timing-training.module.scss';
import { FormEvent, useCallback, useRef, useState } from 'react';
import { random } from 'lodash-es';
import { useUpdateEffect } from 'react-use';

const separator = ' ';

export function FeatureTimingTraining() {
  const [intervalsString, setIntervalsString] = useState('25');
  const [intervals, setIntervals] = useState<number[]>([]);

  const [trainingTime, setTrainingTime] = useState(0);
  const [trainingInterval, setTrainingInterval] = useState(0);
  const [isShowResult, setIsShowResult] = useState(false);
  const trainingButtonRef = useRef<HTMLButtonElement>(null);

  function onIntervalsFormSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const nextIntervals = intervalsString
      .split(separator)
      .map((s) => parseInt(s))
      .filter(Number.isInteger);

    setIntervalsString(nextIntervals.join(separator));
    setIntervals(nextIntervals);
  }

  const nexTime = useCallback(() => {
    const nextInterval = intervals[random(0, intervals.length - 1)];
    const nextTime = random(0, 59);

    setTrainingTime(nextTime);
    setTrainingInterval(nextInterval);
    setIsShowResult(false);
  }, [intervals]);

  function nextTrainingState(): void {
    isShowResult ? nexTime() : setIsShowResult(true);
  }

  useUpdateEffect(() => {
    nexTime();
    trainingButtonRef.current?.focus();
  }, [intervals, nexTime]);

  const trainingResult =
    trainingTime + trainingInterval >= 60
      ? trainingTime + trainingInterval - 60
      : trainingTime + trainingInterval;
  const trainingButtonText = isShowResult ? `Next` : `Show result`;

  return (
    <div className={styles['container']}>
      <form
        className={styles['grid-with-columns']}
        onSubmit={onIntervalsFormSubmit}
      >
        <input
          type="text"
          autoFocus
          placeholder="Enter intervals, e.g. '25 35'"
          value={intervalsString}
          onChange={(e) => setIntervalsString(e.target.value)}
        />
        <button>Start</button>
      </form>
      {!!intervals.length && (
        <div className={styles['grid-with-columns']}>
          <div>
            {`${trainingTime}`}
            {intervals.length > 1 && ` + ${trainingInterval}`}
            {isShowResult && ` = ${trainingResult}`}
          </div>
          <div>
            <button ref={trainingButtonRef} onClick={nextTrainingState}>
              {trainingButtonText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeatureTimingTraining;
