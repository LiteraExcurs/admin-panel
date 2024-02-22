import { BooleanInput, DateInput, Edit, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { UserEditToolbar } from '../common/common';

export const GuideEdit = () => (
    <Edit>
        <SimpleForm toolbar={<UserEditToolbar/>}>
            <TextInput sx={{ minWidth: 650 }} source="id" label='№' disabled/>
            <DateInput sx={{ minWidth: 650 }} source="createdAt" disabled/>
            <DateInput sx={{ minWidth: 650 }} source="updatedAt" disabled/>
            <TextInput sx={{ minWidth: 650 }} source="name" label='Имя'/>
            <TextInput sx={{ minWidth: 650 }} source="description" label='Описание' multiline rows={5}/>
            <SelectInput sx={{ minWidth: 650 }} source="location" label='Локация' defaultValue='capital' choices={[
                { id: 'capital', name: 'Столица' },
                { id: 'region', name: 'Регион' }
            ]}/>
            <BooleanInput source="isActive" label='Активен'/>
        </SimpleForm>
    </Edit>
);