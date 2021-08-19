import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from "../components/ProductCard"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react';
import { actionCreators, State } from "../state"
import { bindActionCreators } from "redux"

// Import Swiper styles



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '500px',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }),
);

function getSteps() {
  return ['Front Bumpers:', 'Rear Bumpers:', 'Steering Wheels:', "Computers:", "Wheels:"];
}

export default function VerticalLinearStepper() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const products = useSelector((state: State) => state.products)
  const { setActive } = bindActionCreators(actionCreators, dispatch)
  const { setUpgrade } = bindActionCreators(actionCreators, dispatch)
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const setUpgradeHandle = (index:number, collection:string) => {
      setActive(products[collection][index])
      setUpgrade(collection)
  };

  function getStepContent(step: number) {
  
    switch (step) {
      case 0:
        return  <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log("dad")}
        onSlideChange={(swiper) => setUpgradeHandle(swiper.realIndex, "frontBumperUpgrades")}
      >
       {products.frontBumperUpgrades && products.frontBumperUpgrades.map((upgrade: any)=> {
         return <SwiperSlide><Card frontBumper = {upgrade}/></SwiperSlide>
       })}
      </Swiper>
      case 1:
        return <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setUpgradeHandle(swiper.realIndex , "backBumperUpgrades")}
        onSlideChange={(swiper) => setUpgradeHandle(swiper.realIndex , "backBumperUpgrades")}
      >
       {products.backBumperUpgrades && products.backBumperUpgrades.map((upgrade: any)=> {
         return <SwiperSlide><Card frontBumper = {upgrade}/></SwiperSlide>
       })}
      </Swiper>;
      case 2:
        return <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setUpgradeHandle(swiper.realIndex , "steeringWheelsUpgrades")}
        onSlideChange={(swiper) => setUpgradeHandle(swiper.realIndex , "steeringWheelsUpgrades")}
      >
       {products.steeringWheelsUpgrades && products.steeringWheelsUpgrades.map((upgrade: any)=> {
         return <SwiperSlide><Card frontBumper = {upgrade}/></SwiperSlide>
       })}
      </Swiper>;
        case 3:
          return <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => setUpgradeHandle(swiper.realIndex, "computer")}
          onSlideChange={(swiper) => setUpgradeHandle(swiper.realIndex, "computer")}
        >
         {products.computer && products.computer.map((upgrade: any)=> {
           return <SwiperSlide><Card frontBumper = {upgrade}/></SwiperSlide>
         })}
        </Swiper>;
          case 4:
            return <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => setUpgradeHandle(swiper.realIndex, "wheels")}
            onSlideChange={(swiper) => setUpgradeHandle(swiper.realIndex, "wheels")}
          >
           {products.wheels && products.wheels.map((upgrade: any)=> {
             return <SwiperSlide><Card frontBumper = {upgrade}/></SwiperSlide>
           })}
          </Swiper>;
      default:
        return 'Unknown step';
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
          {getStepContent(index)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
