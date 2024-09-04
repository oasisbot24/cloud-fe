import {
  CardContent,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import { PresetWeightType, presetWeightAtom } from "@/datas/preset";
import VerticalCarousel from "@/layouts/Carousel/vertical";

export default function PresetWeightInfo() {
  const [presetWeight] = useAtom(presetWeightAtom);

  const steps = Object.keys(presetWeight)
    .filter(key => presetWeight[key as keyof PresetWeightType] > 0)
    .map((key, index) => ({
      label: `${key} 에서 ${
        presetWeight[key as keyof PresetWeightType]
      }% 매수합니다.`,
      description: `${index + 1}번째로 진입합니다.`,
    }));

  return (
    <CardContent className="p-0">
      <VerticalCarousel height={340}>
        <Stepper orientation="vertical" activeStep={steps.length}>
          {steps.map((step, index) => (
            <Step key={index} expanded>
              <StepLabel className="text-sm">{step.label}</StepLabel>
              <StepContent>
                <Typography className="text-xs">{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </VerticalCarousel>
    </CardContent>
  );
}
