import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const BookingEdit = () => (
    <Edit>
        <SimpleForm >
            <TextInput sx={{ minWidth: 650 }} source="id" label='№' disabled/>
            <DateInput sx={{ minWidth: 650 }} source="createdAt" disabled label='Создано'/>
            <DateInput sx={{ minWidth: 650 }} source="updatedAt" disabled label='Изменено'/>
            <TextInput sx={{ minWidth: 650 }} source="name" label='Имя'/>
            <TextInput sx={{ minWidth: 650 }} source="phoneNumber" label='Телефон'/>
            <TextInput sx={{ minWidth: 650 }} source="email" label='Электронная почта'/>
            <NumberInput sx={{ minWidth: 650 }} source="visitors" label='Количество участников'/>
        </SimpleForm>
    </Edit>
);