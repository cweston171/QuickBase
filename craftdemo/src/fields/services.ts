import axios from 'axios'
import { FieldSettings } from '../models/builderModels'

class FieldService {
  static getFieldSettings(id: string) {
    return {
      label: 'Sales region',
        required: false,
        choices: [
          'Asia',
          'Australia',
          'Western Europe',
          'North America',
          'Eastern Europe',
          'Latin America',
          'Middle East and Africa'
        ],
      displayAlpha: true,
      default: 'North America'
    }
  }
  
  static saveField(field: FieldSettings) {
    return axios.post('http://www.mocky.io/v2/566061f21200008e3aabd919', field)
  }
}

export default FieldService
