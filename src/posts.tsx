import { Create, Datagrid, List, ReferenceField, SaveButton, TextField, Toolbar } from 'react-admin';
import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users" />
            <TextField source="id"/>
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

const UserEditToolbar = () => (
    <Toolbar >
        <SaveButton />
    </Toolbar>
);

export const PostEdit = () => (
    <Edit>
        <SimpleForm toolbar={<UserEditToolbar />}>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" InputProps={{ disabled: true }}/>
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Create>
);