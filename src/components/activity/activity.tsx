import { BooleanField, Datagrid, List, SimpleList, TextField } from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";

export const ActivityList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

    return (<List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.slug}
                    tertiaryText={(record) => record.location}
                />
            ) : (
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="type" />
                <TextField source="slug" />
                <TextField source="subtitle" />
                <TextField source="season" />
                <TextField source="location" />
                <TextField source="description" />
                <TextField source="image" />
                <BooleanField source="isActive" />
            </Datagrid>)}
    </List>
)};

