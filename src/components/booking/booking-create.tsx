import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const BookingCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="eventId" reference='event'>
                 <SelectInput sx={{ minWidth: 650 }} required label='Событие'/>
            </ReferenceInput>
            <TextInput sx={{ minWidth: 650 }} source="name" label='Имя'/>
            <TextInput sx={{ minWidth: 650 }} source="phoneNumber" label='Телефон'/>
            <TextInput sx={{ minWidth: 650 }} source="email" label='Электронная почта'/>
            <NumberInput sx={{ minWidth: 650 }} source="visitors" label='Количество участников'/>
        </SimpleForm>
    </Create>
);