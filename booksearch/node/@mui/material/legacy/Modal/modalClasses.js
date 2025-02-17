import generateUtilityClasses from '@mui/utils/generateUtilityClasses';
import generateUtilityClass from '@mui/utils/generateUtilityClass';
export function getModalUtilityClass(slot) {
  return generateUtilityClass('MuiModal', slot);
}
var modalClasses = generateUtilityClasses('MuiModal', ['root', 'hidden', 'backdrop']);
export default modalClasses;