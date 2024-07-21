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
    <Stack className={`w-full ${className}`}>
      {label && (
        <InputLabel shrink htmlFor={id} size="normal">
          {label}
        </InputLabel>
      )}
      <TextField
        {...props}
        fullWidth
        size="small"
        className="h-[30px] flex-0 items-center justify-center leading-[16px] font-[14px]" // TODO: flex 안늘어나게 (30px 안먹음)
        label={undefined}
        sx={{
          "MuiInputBase-root": {
            height: 30,
            fontSize: 14,
          },
        }}
      />
    </Stack>
  );
}

export default FormTextField;
