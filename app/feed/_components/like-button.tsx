// function LikeButton() {
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <button
//           onClick={canVote ? handleLike : (e) => e.stopPropagation()}
//           className={`flex items-center gap-2 transition-colors group
//                 ${hasVoted ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
//         >
//           <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
//             <TrendingUp
//               size={20}
//               className={
//                 isResolved
//                   ? "text-green-600"
//                   : hasVoted
//                     ? "text-blue-600"
//                     : "group-hover:-translate-y-0.5 transition-transform"
//               }
//             />
//           </div>
//           <span className="font-semibold text-sm">
//             {votes} <span className="hidden sm:inline">Support</span>
//           </span>
//         </button>
//       </PopoverTrigger>

//       {!canVote && (
//         <PopoverContent
//           onClick={(e) => e.stopPropagation()}
//           align="start"
//           className="w-64 p-4 shadow-xl border-slate-200"
//         >
//           <div className="space-y-3">
//             <p className="text-sm font-medium text-slate-800">
//               Join the community to support this issue
//             </p>
//             <Link
//               href="/login"
//               onClick={(e) => e.stopPropagation()}
//               className="block w-full text-center bg-blue-600 text-white text-sm py-2
//                 rounded-md hover:bg-blue-700 transition-colors"
//             >
//               Sign in
//             </Link>
//           </div>
//         </PopoverContent>
//       )}
//     </Popover>
//   );
// }
