import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { ActivityList } from "./components/activity/activity";
import { ActivityEdit } from "./components/activity/activity-edit";
import { ActivityCreate } from "./components/activity/activity-create";
import { EventList } from "./components/event/event";
import { EventEdit } from "./components/event/event-edit";
import { GuideList } from "./components/guide/guide";
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MuseumIcon from '@mui/icons-material/Museum';
import { GuideEdit } from "./components/guide/guide-edit";
import { GuideCreate } from "./components/guide/guide-create";
import { EventCreate } from "./components/event/event-create";
import { BookingList } from "./components/booking/booking";
import { BookingEdit } from "./components/booking/booking-edit";
import { BookingCreate } from "./components/booking/booking-create";

export const App = () => (
  <Admin 
  authProvider={authProvider} 
  dataProvider={dataProvider}>
    
    <Resource 
    name='activity' 
    list={ActivityList} 
    edit={ActivityEdit} 
    create={ActivityCreate} 
    recordRepresentation={activity => activity.name}
    icon={MuseumIcon}/>
    
    <Resource 
    name='event'
    list={EventList} 
    edit={EventEdit} 
    create={EventCreate}
    recordRepresentation={event => `${event.name} часть ${event.part} ${event.date}`}
    icon={CalendarTodayIcon}/>

    <Resource 
    name='booking' 
    list={BookingList}
    edit={BookingEdit}
    create={BookingCreate}
    icon={PermContactCalendarIcon}/>

    <Resource 
    name='guides' 
    list={GuideList}
    edit={GuideEdit}
    create={GuideCreate}
    recordRepresentation={guide => guide.name}
    icon={InterpreterModeIcon}/>

  </Admin>)
