import { BooleanInput, Create, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const GuideCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput sx={{ minWidth: 650 }} source="name" label='Имя' required/>
            <TextInput sx={{ minWidth: 650 }} source="description" label='Описание' multiline rows={5}/>
            <SelectInput sx={{ minWidth: 650 }} source="location" label='Локация' defaultValue='capital' required choices={[
                { id: 'capital', name: 'Столица' },
                { id: 'region', name: 'Регион' }
            ]}/>
            <BooleanInput source="isActive" label='Активен' defaultValue={true}/>
        </SimpleForm>
    </Create>)