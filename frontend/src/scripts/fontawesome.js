import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faBullseye, 
    faHouse, 
    faFireFlameCurved, 
    faChartPie, 
    faGear, 
    faCircleCheck, 
    faCheck, 
    faArrowRightToBracket, 
    faRightFromBracket,
    faAngleDown,
    faEye,
    faMagnifyingGlass,
    faUser,
    faArrowLeft,
    faDove,
    faXmark,
    faArrowUpFromBracket,
    faEyeLowVision,
    faArrowDownLong,
    faTrashCan,
    faTrash,
    faCreditCard
} from "@fortawesome/free-solid-svg-icons";

const icons = [    
    faBullseye, 
    faHouse, 
    faFireFlameCurved, 
    faChartPie, 
    faGear, 
    faCircleCheck, 
    faCheck, 
    faArrowRightToBracket, 
    faRightFromBracket,
    faAngleDown,
    faEye,
    faMagnifyingGlass,
    faUser,
    faArrowLeft,
    faDove,
    faXmark,
    faArrowUpFromBracket,
    faEyeLowVision,
    faArrowDownLong,
    faTrashCan,
    faTrash,
    faCreditCard
]

for(let i = 0; i < icons.length; i++){
    library.add(icons[i])
}