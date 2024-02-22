import { BooleanInput, Create, DateInput, NumberInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin';

export const EventCreate = () => (
    <Create>
        <SimpleForm sx={{ minWidth: 650 }}>
            <DateInput sx={{ minWidth: 650 }} source="date" label='Дата мероприятия' required defaultValue={new Date}/>
            <NumberInput sx={{ minWidth: 650 }} source="part" label='Часть' required defaultValue={1}/>
            <ReferenceInput source="activityId" reference='activity'>
                 <SelectInput sx={{ minWidth: 650 }} required label='Активность'/>
            </ReferenceInput>
            <NumberInput sx={{ minWidth: 650 }} source="durationTime" required label='Продолжительность часов'/>
            <NumberInput sx={{ minWidth: 650 }} source="capacity" required label='Максимум участников'/>
            <NumberInput sx={{ minWidth: 650 }} source="price" required label='Цена'/>
            <ReferenceInput source="guideId" reference='guides'>
                 <SelectInput sx={{ minWidth: 650 }} required label='Гид'/>
            </ReferenceInput>
            <BooleanInput source="isActive" label='Активно' defaultValue={true}/>
        </SimpleForm>
    </Create>
);