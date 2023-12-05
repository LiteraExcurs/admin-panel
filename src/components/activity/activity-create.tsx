import { BooleanInput, DateInput, Create, SimpleForm, TextInput } from 'react-admin';

export const ActivityCreate = () => (
    <Create>
        <SimpleForm>
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
    </Create>
);