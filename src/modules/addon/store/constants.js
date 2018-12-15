
export const DEFAULT_ADDON = {
  _id: null,
  label: '',
  label_plural: '',
  identifier: '',
  identifier_plural: '',
  class_name: '',
  class_name_plural: '',
  description: '',
  more_info_url: '',
  attributes: [
    {
      order: 0,
      label: 'Label',
      identifier: 'label',
      help: '',
      required: true,
      unique: true,
      datatype: 'TEXT',
      datatypeOptions: {}
    }
  ]
}

// Datattype IDs
// TODO - it might be best to abstract this into codotype/codotype as a centralized single-source-of-truth
// At the very least it should be abstracted into a central location to mitigate unnecessary duplication
export const TEXT = 'TEXT'
export const NUMBER = 'NUMBER'
export const BOOL = 'BOOL'
export const DATE = 'DATE'
export const TIME = 'TIME'
export const DATETIME = 'DATETIME'
export const COLOR = 'COLOR'
export const RELATION = 'RELATION'

export const DATATYPES = [
  { value: TEXT, text: 'Text', icon: 'fa-quote-left' },
  { value: NUMBER, text: 'Number', icon: 'fa-hashtag' },
  { value: BOOL, text: 'Boolean', icon: 'fa-check-square-o' },
  { value: DATE, text: 'Date', icon: 'fa-calendar-o' },
  { value: TIME, text: 'Time', icon: 'fa-clock-o' },
  { value: DATETIME, text: 'DateTime', icon: 'fa-calendar-plus-o' },
  { value: COLOR, text: 'Color', icon: 'fa-eyedropper' },
  { value: 'JSON', text: 'JSON', icon: 'fa-code' },
  // { value: 'GEO', text: 'Geolocation', icon: 'fa-map' },
  { value: RELATION, text: 'Relation', icon: 'fa-link' }
]
