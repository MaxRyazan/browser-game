/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { App } from 'vue'
import PrimeVue from 'primevue/config'
import Calendar from 'primevue/calendar'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputSwitch from 'primevue/inputswitch';
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ConfirmationService from 'primevue/confirmationservice'
import ConfirmPopup from 'primevue/confirmpopup'
import Menu from 'primevue/menu'
import Tree from 'primevue/tree'
import Tooltip from 'primevue/tooltip';
import FileUpload from 'primevue/fileupload'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Breadcrumb from 'primevue/breadcrumb';
import Image from 'primevue/image'
import RadioButton from 'primevue/radiobutton'
import TreeTable from 'primevue/treetable'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab';
import ProgressSpinner from 'primevue/progressspinner';
import ProgressBar from 'primevue/progressbar';
import OrganizationChart from 'primevue/organizationchart';
import Slider from 'primevue/slider';
import Divider from 'primevue/divider';
import Skeleton from 'primevue/skeleton';
import OverlayPanel from 'primevue/overlaypanel';
import ColorPicker from 'primevue/colorpicker';
import Password from 'primevue/password'
// import '@/scss/style.scss'
// import '@/scss/fluent-light-theme.scss'

import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
// import 'primeicons/primeicons.css'

export function initPrimeVUE(app: App<Element>) {
    app.use(PrimeVue, {
        ripple: true,
        locale: {
            startsWith: 'Начинается с',
            contains: 'Содержит',
            notContains: 'Не содержит',
            endsWith: 'Заканчивается на',
            equals: 'Равно',
            notEquals: 'Не равно',
            noFilter: 'Нет фильтра',
            lt: 'Меньше чем',
            lte: 'Меньше или равно',
            gt: 'Больше чем',
            gte: 'Больше или равно',
            dateIs: 'Дата равна',
            dateIsNot: 'Дата не равна',
            dateBefore: 'Дата перед',
            dateAfter: 'Дата после',
            clear: 'Очистить',
            apply: 'Применить',
            matchAll: 'Match All',
            matchAny: 'Match Any',
            addRule: 'Добавить правило',
            removeRule: 'Удалить правило',
            accept: 'Да',
            reject: 'Нет',
            choose: 'Выберите',
            upload: 'Загрузить',
            cancel: 'Отмена',
            dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            dayNamesShort: ["Вск", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
            dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            today: 'Сегодня',
            weekHeader: 'Нед',
            firstDayOfWeek: 1,
            dateFormat: 'dd.mm.yy',
            weak: 'Слабый',
            medium: 'Средний',
            strong: 'Сильный',
            passwordPrompt: 'Введите пароль',
            emptyFilterMessage: 'Результатов не найдено',
            emptyMessage: 'Нет доступных вариантов'
        }
    })
    app.use(ToastService)
    app.use(ConfirmationService)
    app.component("Toast", Toast)
    app.component('Dialog', Dialog)
    app.component('Button', Button)
    app.component('InputText', InputText)
    app.component('InputNumber', InputNumber)
    app.component('Textarea', Textarea)
    app.component('Dropdown', Dropdown)
    app.component('Checkbox', Checkbox)
    app.component('DataTable', DataTable)
    app.component('Column', Column)
    app.component('Calendar', Calendar)
    app.component('ConfirmPopup', ConfirmPopup)
    app.component('Menu', Menu)
    app.component('Tree', Tree)
    app.component('FileUpload', FileUpload)
    app.component('TabView', TabView)
    app.component('TabPanel', TabPanel)
    app.directive('tooltip',Tooltip)
    app.component('Breadcrumb', Breadcrumb)
    app.component('InputSwitch', InputSwitch)
    app.component('Image', Image)
    app.component('RadioButton', RadioButton)
    app.component('TreeTable', TreeTable)
    app.component('Accordion', Accordion)
    app.component('AccordionTab', AccordionTab)
    app.component('ProgressSpinner', ProgressSpinner)
    app.component('ProgressBar', ProgressBar)
    app.component('Slider', Slider)
    app.component('Divider', Divider)
    app.component('Skeleton', Skeleton)
    app.component('OverlayPanel', OverlayPanel)
    app.component('ColorPicker', ColorPicker)
    app.component('OrganizationChart', OrganizationChart)
    app.component('Password', Password)
}
