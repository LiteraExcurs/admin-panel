import { BooleanInput, Create, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const ActivityCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput sx={{ minWidth: 650 }} source="name" label='Название' required/>
            <SelectInput sx={{ minWidth: 650 }} source="type" label='Тип' required defaultValue='excursion' choices={[
                { id: 'excursion', name: 'Экскурсия' },
                { id: 'tour', name: 'Тур' }
            ]} />
            <TextInput sx={{ minWidth: 650 }} source="slug" label='Ссылка' required/>
            <TextInput sx={{ minWidth: 650 }} source="subtitle" label='Подзаголовок'/>
            <SelectInput sx={{ minWidth: 650 }} source="season" label='Сезон' required choices={[
                { id: 'winter', name: 'Зима' },
                { id: 'summer', name: 'Лето' },
                { id: 'spring', name: 'Весна' },
                { id: 'autumn', name: 'Осень' }
            ]}/>
            <SelectInput sx={{ minWidth: 650 }} source="location" label='Локация' required defaultValue='capital' choices={[
                { id: 'capital', name: 'Столица' },
                { id: 'region', name: 'Регион' }
            ]}/>
            <TextInput sx={{ minWidth: 650 }} source="description" label='Описание' required multiline rows={5} />
            <TextInput sx={{ minWidth: 650 }} source="image" label='Изображение'/>
            <BooleanInput source="isActive" label='Активно' defaultValue={true}/>
            <BooleanInput source="isDeleted" label='Удалено'/>
        </SimpleForm>
    </Create>
);