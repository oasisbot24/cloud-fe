import React, { Dispatch, SetStateAction } from "react";
import {
  InputBase,
  InputBaseProps,
  InputLabel,
  InputLabelProps,
  Stack,
  Typography,
} from "@mui/material";

interface FormTextFieldProps {
  id: string;
  label?: string;
  type?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  inputLabelProps?: InputLabelProps;
}

function FormTextField(
  props: FormTextFieldProps & Omit<InputBaseProps, "variant">,
) {
  const { id, label, className, setValue, inputLabelProps } = props;

  return (
    <Stack className={`w-full ${className}`}>
      {label && (
        <InputLabel htmlFor={id} {...inputLabelProps}>
          <Typography variant="100R">{label}</Typography>
        </InputLabel>
      )}
      <InputBase
        {...props}
        fullWidth
        classes={{
          input:
            "h-[30px] p-0 flex-0 items-center justify-center leading-[16px] text-[14px] border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 font-[500] text-font-2",
        }}
        onChange={e => {
          if (setValue) setValue(e.target.value);
        }}
      />
    </Stack>
  );
}

export default React.memo(FormTextField);
