// import {
//   Action,
//   List,
//   Current,
//   ListOptions,
//   OptionItem,
//   OptionName,
// } from './styles';

// export default function Sort() {
//   return <Action $active={isOpenHeader}>
//   <OptionName>{children} Results By</OptionName>
//   <List onClick={openListHandler}>
//     <Current>
//       <p>{activeSortOption}</p>
//       <Drop $active>
//         <img src={arrowRight} alt="options" />
//       </Drop>
//     </Current>
//     <ListOptions $active={isOpenList}>
//       {children === 'Sort' &&
//         options.map((option, id) => (
//           <OptionItem key={id} $active={activeSortOption === option} onClick={listOptionClickHandler}>
//             {option}
//           </OptionItem>
//         ))}
//     </ListOptions>
//   </List>
// </Action>
// }