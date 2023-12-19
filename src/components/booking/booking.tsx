import { Datagrid, DateField, EmailField, List, NumberField, TextField } from 'react-admin';

export const BookingList = () => (
    <List title='Записи'>
        <Datagrid rowClick="edit">
            <TextField source="id" label='№'/>
            <NumberField source="event.part" label='Часть'/>
            <TextField source="event.name" label='Событие'/>
            <DateField source="date" label='Дата'/>
            <NumberField source="visitors" label='Количество участников'/>
            <TextField source="name" label='Имя'/>
            <TextField source="phoneNumber" label='Телефон'/>
            <EmailField source="email" label='Электронная почта'/>
            <NumberField source="price" label='Цена'/>
        </Datagrid>
    </List>
);