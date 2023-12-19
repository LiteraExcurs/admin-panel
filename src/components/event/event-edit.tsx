import { BooleanInput, DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { UserEditToolbar } from '../common/common';

export const EventEdit = () => (
    <Edit>
        <SimpleForm sx={{ minWidth: 650 }} toolbar={<UserEditToolbar/>}>
            <TextInput sx={{ minWidth: 650 }} source="id" label='№' disabled />
            <DateInput sx={{ minWidth: 650 }} source="createdAt" label='Создано' disabled/>
            <DateInput sx={{ minWidth: 650 }} source="updatedAt" label='Изменено' disabled/>
            <DateInput sx={{ minWidth: 650 }} source="date" label='Дата мероприятия'/>
            <NumberInput sx={{ minWidth: 650 }} source="part" label='Часть'/>
            <ReferenceInput sx={{ minWidth: 650 }} source="activityId" reference='activity'>
                 <SelectInput sx={{ minWidth: 650 }} label='Активность'/>
            </ReferenceInput>
            <NumberInput sx={{ minWidth: 650 }} source="durationTime" label='Продолжительность часов'/>
            <NumberInput sx={{ minWidth: 650 }} source="capacity" label='Максимум участников'/>
            <NumberInput sx={{ minWidth: 650 }} source="price" label='Цена'/>
            <ReferenceInput sx={{ minWidth: 650 }} source="guideId" reference='guides'>
                 <SelectInput sx={{ minWidth: 650 }} label='Гид'/>
            </ReferenceInput>
            <BooleanInput source="isActive" label='Активно'/>
        </SimpleForm>
    </Edit>
);

        //     <SimpleForm sx={{ minWidth: 650 }} toolbar={<UserEditToolbar/>}>
        //     <TextInput sx={{ minWidth: 650 }} source="id" disabled />
        //     <TextInput sx={{ minWidth: 650 }} source="name" disabled/>
        //     <TextInput sx={{ minWidth: 650 }} source="slug" disabled />
        //     <ReferenceInput sx={{ minWidth: 650 }} source="activityId" reference='activity'>
        //         <AutocompleteArrayInput label='Activity'/>
        //     </ReferenceInput>
        //     <BooleanInput sx={{ minWidth: 650 }} source="isActive" />
        //     <DateInput sx={{ minWidth: 650 }} source="date" />
        //     <NumberInput sx={{ minWidth: 650 }} source="durationTime" />
        //     <NumberInput sx={{ minWidth: 650 }} source="capacity" />
        //     <NumberInput sx={{ minWidth: 650 }} source="guide" />
        // </SimpleForm>