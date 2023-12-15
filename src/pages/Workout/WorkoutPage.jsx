/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { useEffect } from "react";

import { ExercisesList } from "../../components/Exercises/Exercises";
import { ProgressExercises } from "../../components/ProgressExercises/ProgressExercises";
import { ProgressModal } from "../../components/LayoutModal/ProgressModal/ProgressModal";
import { SuccessModal } from "../../components/LayoutModal/SuccessModal/SuccessModal";
import { SelectWorkout } from "../../components/SelectWorkout/SelectWorkout";
import { LayoutModal } from "../../components/LayoutModal/layout/LayoutModal";

import { NavigateBlock } from "../../components/NavigationBlock/Navi";

import {
  allWorkoutSelector,
  currentCourseSelector,
  courseList
} from "../../store/selectors/coursesNew";
import { getExecises, getWorkouts } from "../../Api";
import {
  setExercisesList,
  setSelectedWorkout,
  setWorkoutList
} from "../../store/slices/courseWorkoutSlise";
import { listExercises } from "../../store/selectors/coursesNew";

export const WorkoutPage = () => {
  const workoutId = useParams();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timerId = setInterval(() => setLoading(!loading), 2000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const workoutList = useSelector(allWorkoutSelector);
  const workout = workoutList?.filter((workout) => workout._id === workoutId.id);
  const exercises = workout?.filter((exercise) => workout.exercise === exercise);
  const name = workout?.filter((name) => workout.name === name);
  const video = workout?.filter((video) => workout.video === video);
  //const currentCourse = useSelector(currentCourseSelector);

  //let currentWorkout;

  // for (const course in allCourses) {
  //   allCourses[course].workouts.map((wo) =>
  //     wo._id === workoutId.id
  //       ? wo.progress !== undefined
  //         ? (currentWorkout = wo.progress)
  //         : (currentWorkout = wo.exercises)
  //       : ""
  //   );
  // }

  //const title = `${workout.name}`;

  // const coursesList = useSelector(selectCourses);
  // const currentCourse = coursesList.filter((course) => course.workout.includes(workoutId.id));

  const [isProgressModalShow, setIsProgressModalShow] = useState(false);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);

  const handleClick = () => setIsProgressModalShow(true);

  const openClosedProgModal = () => {
    setIsProgressModalShow(!isProgressModalShow);
  };

  const handleSendClick = () => {
    setTimeout(() => {
      dispatch();
    }, 500);
    setIsProgressModalShow(false);
    setIsSuccessModalShow(true);
  };

  return (
    <S.Container>
      {loading ? (
        <S.Main>
          <NavigateBlock page="Other" />
          <S.Heading>{name}</S.Heading>
          <S.Title>{name}</S.Title>
          <S.Player>
            <ReactPlayer url={video} width="100%" height="100%" />
          </S.Player>
          <S.Exercises>
            <ExercisesList workout={exercises} onClick={handleClick} />
            <ProgressExercises workout={exercises} />
          </S.Exercises>
        </S.Main>
      ) : (
        <S.LoadingCircle />
      )}
      {isProgressModalShow && (
        <LayoutModal onClick={openClosedProgModal}>
          <ProgressModal onClick={handleSendClick} />
        </LayoutModal>
      )}
      {isSuccessModalShow && <SuccessModal setIsSuccessModalShow={setIsSuccessModalShow} />}
    </S.Container>
  );
};

export default WorkoutPage;
