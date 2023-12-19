import { BooleanField, Datagrid, ImageField, List, NumberField, TextField } from 'react-admin';

export const GuideList = () => (
    <List title='Гиды'>
        <Datagrid rowClick="edit">
            <TextField source="id" label='№'/>
            <TextField source="name" label='Имя'/>
            <TextField source="description" label='Описание'/>
            <ImageField source="image" label='Изображение'/>
            <TextField source="location" label='Локация'/>
            <NumberField source="completed" label='Завершено'/>
            <NumberField source="rating" label='Рейтинг'/>
            <BooleanField source="isActive" label='Активен'/>
        </Datagrid>
    </List>
);