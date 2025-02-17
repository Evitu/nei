import generateUtilityClasses from '@mui/utils/generateUtilityClasses';
import generateUtilityClass from '@mui/utils/generateUtilityClass';
export function getTableContainerUtilityClass(slot) {
  return generateUtilityClass('MuiTableContainer', slot);
}
var tableContainerClasses = generateUtilityClasses('MuiTableContainer', ['root']);
export default tableContainerClasses;