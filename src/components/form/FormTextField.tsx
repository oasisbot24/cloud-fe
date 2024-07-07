import { InputLabel, Stack, TextField, TextFieldProps } from "@mui/material";

interface FormTextFieldProps {
  id: string;
  label?: string;
}

function FormTextField(
  props: FormTextFieldProps & Omit<TextFieldProps, "variant">,
) {
  const { id, label, className } = props;
  return (
    <Stack className={className}>
      {label && (
        <InputLabel shrink htmlFor={id} size="normal">
          {label}∏
        </InputLabel>
      )}
      <TextField
        {...props}
        fullWidth
        size="small"
        className="h-[30px] items-center justify-center"
      />
    </Stack>
  );
}

export default FormTextField;
