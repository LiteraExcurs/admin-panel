import { BooleanField, Datagrid, ImageField, List, SimpleList, TextField, useRecordContext } from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';


export default function StyledComponentsDeep({...props}) {
  return (
    <Box sx={{ maxHeight: 100, overflow: 'hidden' }}>
      <TextField {...props} />
    </Box>
  );
}

export const ActivityList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    const CustomField = () => {
        const record = useRecordContext();
        return (
            <span>
                {record.events.length}
            </span >
        )
    };
    return (<List title='Мероприятия'>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.slug}
                    tertiaryText={(record) => record.location}
                />
            ) : (
            <Datagrid rowClick="edit">
                <TextField source="id" label='№'/>
                <TextField source="name" label='Название'/>
                <TextField source="subtitle" label='Подзаголовок'/>
                <TextField source="season" label='Сезон'/>
                <TextField source="type" label='Тип'/>
                <TextField source="location" label='Локация'/>
                <StyledComponentsDeep source="description" label='Описание'/>
                <TextField source="slug" label='Ссылка'/>
                <StyledEngineProvider injectFirst>
                    <ImageField source="image" label='Изображение'/>
                </StyledEngineProvider>
                <BooleanField source="isActive" label='Активно'/>
                <BooleanField source="isDeleted" label='Удалено'/>
                <CustomField label='Событий'/>
            </Datagrid>)}
    </List>
)};

