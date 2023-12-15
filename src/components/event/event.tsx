import { BooleanField, Datagrid, DateField, List, NumberField, SimpleList, TextField } from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";
import { useRecordContext } from 'react-admin';

export const EventList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

const CustomField = () => {
    const record = useRecordContext();
    return (
        <span>
            {record.booked.reduce((acc, item) => acc + item.visitors, 0)}
        </span >
    )
};

    return (<List title='События'>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.date}
                    tertiaryText={(record) => record.booked}
                />
            ) : (
        <Datagrid rowClick="edit">
            <TextField source="id" label='№'/>
            <DateField source="date" label='Дата' />
            <NumberField source="part" label='Часть №' />
            <TextField source="name" label='Название'/>
            <CustomField label='Участников'/>
            <TextField source="guide.name" label='Гид'/>
            <NumberField source="durationTime" label='Длительность часов' />
            <NumberField source="capacity" label='Максимум участников' />
            <NumberField source="rating" label='Рейтинг' />
            <NumberField source="price" label='Цена' />
            <BooleanField source="isActive" label='Активно' />
        </Datagrid>)}
    </List>
)}
