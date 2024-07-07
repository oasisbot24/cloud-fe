import {
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Stack,
} from "@mui/material";

interface FormSelectProps {
  id: string;
  label?: string;
  items: {
    label: string;
    value: string;
  }[];
}

function FormSelect(props: FormSelectProps & SelectProps<string>) {
  const { id, label, items, className } = props;
  return (
    <Stack className={className}>
      {label && (
        <InputLabel shrink htmlFor={id} size="normal">
          {label}
        </InputLabel>
      )}
      <Select {...props} fullWidth>
        {items.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}

export default FormSelect;
