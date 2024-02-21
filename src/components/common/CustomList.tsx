import { List, ListItem, ListItemText } from "@mui/material";

interface ListData {
  data: string[];
}

export default function CustomList({ data }: ListData) {
  return (
    <div className="flex mt-5 w-full">
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {data?.map((value, index) => (
          <ListItem key={index} divider style={{ height: "32px" }}>
            {index % 2 === 1 ? (
              <ListItemText primary={`${value}`} />
            ) : (
              <ListItemText
                primary={`${value}`}
                primaryTypographyProps={{
                  fontWeight: "bold",
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
