import {
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Stack,
  Typography,
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
    <Stack className={`w-full ${className}`}>
      {label && (
        <InputLabel htmlFor={id}>
          <Typography variant="100R" className="text-neutral-600">
            {label}
          </Typography>
        </InputLabel>
      )}
      <Select
        {...props}
        fullWidth
        classes={{
          root: "before:border-none",
          select:
            "h-[30px] p-0 flex-0 flex items-center leading-[16px] text-[14px] border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 font-[500] text-font-2",
        }}
      >
        {items.map(item => (
          <MenuItem key={item.value} value={item.value} className="">
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}

export default FormSelect;
