import {
  InputBase,
  InputBaseProps,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";

interface FormTextFieldProps {
  id: string;
  label?: string;
}

function FormTextField(
  props: FormTextFieldProps & Omit<InputBaseProps, "variant">,
) {
  const { id, label, className } = props;
  return (
    <Stack className={`w-full ${className}`}>
      {label && (
        <InputLabel htmlFor={id}>
          <Typography variant="100R" className="text-neutral-600">
            {label}
          </Typography>
        </InputLabel>
      )}
      <InputBase
        {...props}
        fullWidth
        classes={{
          input:
            "h-[30px] p-0 flex-0 items-center justify-center leading-[16px] text-[14px] border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 font-[500] text-font-2",
        }}
      />
    </Stack>
  );
}

export default FormTextField;
