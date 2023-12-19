import { BooleanInput, DateInput, Edit, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { UserEditToolbar } from '../common/common';

export const ActivityEdit = () => (
    <Edit>
        <SimpleForm sx={{ minWidth: 650 }} toolbar={<UserEditToolbar/>}>
            <DateInput source="createdAt" label='Создано' disabled/>
            <DateInput source="updatedAt" label='Изменено' disabled/>
            <TextInput sx={{ minWidth: 650 }} source="name" label='Название'/>
            <SelectInput sx={{ minWidth: 650 }} source="type" label='Тип' defaultValue='excursion' choices={[
                { id: 'excursion', name: 'Экскурсия' },
                { id: 'tour', name: 'Тур' }
            ]} />
            <TextInput sx={{ minWidth: 650 }} source="slug" label='Ссылка'/>
            <TextInput sx={{ minWidth: 650 }} source="subtitle" label='Подзаголовок'/>
            <SelectInput sx={{ minWidth: 650 }} source="season" label='Сезон' choices={[
                { id: 'winter', name: 'Зима' },
                { id: 'summer', name: 'Лето' },
                { id: 'spring', name: 'Весна' },
                { id: 'autumn', name: 'Осень' }
            ]}/>
            <SelectInput sx={{ minWidth: 650 }} source="location" label='Локация' defaultValue='capital' choices={[
                { id: 'capital', name: 'Столица' },
                { id: 'region', name: 'Регион' }
            ]}/>
            <TextInput sx={{ minWidth: 650 }} source="description" label='Описание' multiline rows={5} />
            <TextInput sx={{ minWidth: 650 }} source="image" label='Изображение' />
            <BooleanInput source="isActive" label='Активно'/>
            <BooleanInput source="isDeleted" label='Удалено'/>
        </SimpleForm>
    </Edit>
);
