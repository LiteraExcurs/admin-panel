import { BooleanInput, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { UserEditToolbar } from '../common/common';

export const ActivityEdit = () => (
    <Edit>
        <SimpleForm sx={{ minWidth: 800 }} toolbar={<UserEditToolbar/>}>
            <TextInput sx={{ minWidth: 800 }} source="id" InputProps={{ disabled: true }} />
            <DateInput sx={{ minWidth: 800 }} source="createdAt" InputProps={{ disabled: true }} />
            <DateInput sx={{ minWidth: 800 }} source="updatedAt" InputProps={{ disabled: true }} />
            <TextInput sx={{ minWidth: 800 }} source="name" />
            <TextInput sx={{ minWidth: 800 }} source="type" />
            <TextInput sx={{ minWidth: 800 }} source="slug" />
            <TextInput sx={{ minWidth: 800 }} source="subtitle" />
            <TextInput sx={{ minWidth: 800 }} source="season" />
            <TextInput sx={{ minWidth: 800 }} source="location" />
            <TextInput sx={{ minWidth: 800 }} source="description" multiline rows={5} />
            <TextInput sx={{ minWidth: 800 }} source="image" />
            <BooleanInput source="isActive" />
            <BooleanInput source="isDeleted" />
        </SimpleForm>
    </Edit>
);