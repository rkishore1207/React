import axios from 'axios';
import Reminder from '../Models/Reminder';

class ReminderServices{
    http = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/"
    });

    async getReminders(){
        let response = await this.http.get<Reminder[]>('/todos');
        return response.data;
    }

    async addReminders(reminder:Reminder){
        let response = await this.http.post<Reminder>('/todos',reminder);
        return response.data;
    }

    async deleteReminders(id:number){
        let response = await this.http.delete<Reminder>('/todos/'+id);
        return response.data;
    }
}

export default new ReminderServices();