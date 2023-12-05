import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { authProvider } from "./authProvider";
import { PostCreate, PostEdit, PostList } from "./posts";
import { ActivityList } from "./components/activity/activity";
import { ActivityEdit } from "./components/activity/activity-edit";
import { ActivityCreate } from "./components/activity/activity-create";

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name='activity' list={ActivityList} edit={ActivityEdit} create={ActivityCreate} recordRepresentation="slug"/>
    {/* <Resource name='users' show={ShowGuesser} recordRepresentation="name" list={UserList}/> */}
    {/* <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate}/> */}
  </Admin>)
