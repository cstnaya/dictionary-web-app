import{_ as u,a as f}from"./index-65b81576.js";import{i as p,r,o as l,j as k,k as e,m as c,w as h,n as i}from"./vendor-f8187400.js";const x={components:{Switches:p(()=>f(()=>import("./Switches-f5ce5e91.js"),["assets/Switches-f5ce5e91.js","assets/index-65b81576.js","assets/vendor-f8187400.js","assets/index-870e7093.css","assets/Switches-bb450b2e.css"]))},data(){return{darkMode:!1}},props:{fontSize:{type:String,required:!0,validator(t){return["serif","sans-serif","monospace"].includes(t)}}},created(){localStorage.theme==="dark"&&(document.documentElement.classList.add("dark"),this.darkMode=!0)},watch:{darkMode(t){t?(localStorage.theme="dark",document.documentElement.classList.add("dark")):(localStorage.removeItem("theme"),document.documentElement.classList.remove("dark"))}}},g={class:"flex items-center justify-between pt-6 pb-3"},v={class:"flex gap-5"},w={class:"flex items-center"},S=["value"],b=e("option",{value:"serif"},"serif",-1),E=e("option",{value:"sans-serif"},"sans serif",-1),M=e("option",{value:"monospace"},"monospace",-1),V=[b,E,M],y={class:"flex items-center border-l-2 border-l-slate-200 pl-4"};function B(t,o,d,C,s,L){const a=r("font-awesome-icon"),m=r("router-link"),_=r("Switches");return l(),k("header",g,[e("h1",null,[c(m,{to:"/","aria-label":"go to homepage",class:"text-4xl text-slate-500 dark:text-neutral-500 md:text-5xl"},{default:h(()=>[c(a,{icon:"fas fa-glasses"})]),_:1})]),e("ul",v,[e("li",w,[e("select",{class:"px-2 text-right dark:bg-neutral-800 dark:text-white",value:d.fontSize,onChange:o[0]||(o[0]=n=>t.$emit("changeFontSize",n.target.value))},V,40,S)]),e("li",y,[c(_,{class:"mr-2",modelValue:s.darkMode,"onUpdate:modelValue":o[1]||(o[1]=n=>s.darkMode=n)},null,8,["modelValue"]),s.darkMode?(l(),i(a,{key:0,icon:"fas fa-moon",class:"w-8 text-xl dark:text-violet-400"})):(l(),i(a,{key:1,icon:"fas fa-sun",class:"w-8 text-xl"}))])])])}const A=u(x,[["render",B]]);export{A as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLTc1NWYwYWM3LmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGhlYWRlciBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwdC02IHBiLTNcIj5cbiAgICA8aDE+XG4gICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCIgYXJpYS1sYWJlbD1cImdvIHRvIGhvbWVwYWdlXCJcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LTR4bCB0ZXh0LXNsYXRlLTUwMCBkYXJrOnRleHQtbmV1dHJhbC01MDAgbWQ6dGV4dC01eGxcIj48Zm9udC1hd2Vzb21lLWljb25cbiAgICAgICAgICBpY29uPVwiZmFzIGZhLWdsYXNzZXNcIiAvPjwvcm91dGVyLWxpbms+XG4gICAgPC9oMT5cbiAgICA8dWwgY2xhc3M9XCJmbGV4IGdhcC01XCI+XG4gICAgICA8bGkgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwicHgtMiB0ZXh0LXJpZ2h0IGRhcms6YmctbmV1dHJhbC04MDAgZGFyazp0ZXh0LXdoaXRlXCIgOnZhbHVlPVwiZm9udFNpemVcIlxuICAgICAgICAgIEBjaGFuZ2U9XCIkZW1pdCgnY2hhbmdlRm9udFNpemUnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZXJpZlwiPnNlcmlmPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNhbnMtc2VyaWZcIj5zYW5zIHNlcmlmPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vbm9zcGFjZVwiPm1vbm9zcGFjZTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItbC0yIGJvcmRlci1sLXNsYXRlLTIwMCBwbC00XCI+XG4gICAgICAgIDxTd2l0Y2hlcyBjbGFzcz1cIm1yLTJcIiB2LW1vZGVsPVwiZGFya01vZGVcIiAvPlxuICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImZhcyBmYS1tb29uXCIgdi1pZj1cImRhcmtNb2RlXCIgY2xhc3M9XCJ3LTggdGV4dC14bCBkYXJrOnRleHQtdmlvbGV0LTQwMFwiIC8+XG4gICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiBpY29uPVwiZmFzIGZhLXN1blwiIHYtZWxzZSBjbGFzcz1cInctOCB0ZXh0LXhsXCIgLz5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9oZWFkZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBTd2l0Y2hlczogZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT4gaW1wb3J0KCdAL2NvbXBvbmVudHMvc3dpdGNoZXMvU3dpdGNoZXMudnVlJykpIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhcmtNb2RlOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBmb250U2l6ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3Iodikge1xuICAgICAgICByZXR1cm4gWydzZXJpZicsICdzYW5zLXNlcmlmJywgJ21vbm9zcGFjZSddLmluY2x1ZGVzKHYpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UudGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgdGhpcy5kYXJrTW9kZSA9IHRydWVcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgZGFya01vZGUobmV3VmFsdWUpIHtcbiAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UudGhlbWUgPSAnZGFyaydcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RoZW1lJylcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiZGVmaW5lQXN5bmNDb21wb25lbnQiLCJfX3ZpdGVQcmVsb2FkIiwidiIsIm5ld1ZhbHVlIiwiX2hvaXN0ZWRfMSIsIl9ob2lzdGVkXzIiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF82IiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzkiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfcm91dGVyX2xpbmsiLCJfY29tcG9uZW50X2ZvbnRfYXdlc29tZV9pY29uIiwiJHByb3BzIiwiX2N0eCIsIiRldmVudCIsIl9jb21wb25lbnRfU3dpdGNoZXMiLCIkZGF0YSIsIl9jcmVhdGVCbG9jayJdLCJtYXBwaW5ncyI6Im9JQTRCQSxNQUFLQSxFQUFVLENBQ2IsV0FBWSxDQUFFLFNBQVVDLEVBQXFCLElBQUlDLEVBQUEsSUFBRSxPQUFPLHdCQUFvQyxFQUFDLGtCQUFBLENBQUEsQ0FBRyxFQUNsRyxNQUFPLENBQ0wsTUFBTyxDQUNMLFNBQVUsRUFDWixDQUNELEVBQ0QsTUFBTyxDQUNMLFNBQVUsQ0FDUixLQUFNLE9BQ04sU0FBVSxHQUNWLFVBQVVDLEVBQUcsQ0FDWCxNQUFPLENBQUMsUUFBUyxhQUFjLFdBQVcsRUFBRSxTQUFTQSxDQUFDLENBQ3hELENBQ0YsQ0FDRCxFQUNELFNBQVUsQ0FDSixhQUFhLFFBQVUsU0FDekIsU0FBUyxnQkFBZ0IsVUFBVSxJQUFJLE1BQU0sRUFDN0MsS0FBSyxTQUFXLEdBRW5CLEVBQ0QsTUFBTyxDQUNMLFNBQVNDLEVBQVUsQ0FDYkEsR0FDRixhQUFhLE1BQVEsT0FDckIsU0FBUyxnQkFBZ0IsVUFBVSxJQUFJLE1BQU0sSUFFN0MsYUFBYSxXQUFXLE9BQU8sRUFDL0IsU0FBUyxnQkFBZ0IsVUFBVSxPQUFPLE1BQU0sRUFFcEQsQ0FDRixDQUNGLEVBNURVQyxFQUFBLENBQUEsTUFBTSw2Q0FBNkMsRUFNckRDLEVBQUEsQ0FBQSxNQUFNLFlBQVksRUFDaEJDLEVBQUEsQ0FBQSxNQUFNLG1CQUFtQixjQUd6QkMsRUFBQUMsRUFBb0MsU0FBNUIsQ0FBQSxNQUFNLFNBQVEsUUFBSyxFQUFBLEVBQzNCQyxFQUFBRCxFQUE4QyxTQUF0QyxDQUFBLE1BQU0sY0FBYSxhQUFVLEVBQUEsRUFDckNFLEVBQUFGLEVBQTRDLFNBQXBDLENBQUEsTUFBTSxhQUFZLFlBQVMsRUFBQSxLQUZuQ0QsRUFDQUUsRUFDQUMsR0FHQUMsRUFBQSxDQUFBLE1BQU0sc0RBQXNELDRGQWZwRSxPQUFBQyxFQUFBLEVBQUFDLEVBcUJTLFNBckJUVCxFQXFCUyxDQXBCUEksRUFJSyxLQUFBLEtBQUEsQ0FISE0sRUFFMENDLEVBQUEsQ0FGN0IsR0FBRyxJQUFJLGFBQVcsaUJBQzdCLE1BQU0sd0VBQTRELElBQ3hDLENBRHdDRCxFQUN4Q0UsRUFBQSxDQUF4QixLQUFLLGdCQUFnQixDQUFBLFlBRTNCUixFQWNLLEtBZExILEVBY0ssQ0FiSEcsRUFPSyxLQVBMRixFQU9LLENBTkhFLEVBS1MsU0FBQSxDQUxELE1BQU0sc0RBQXVELE1BQU9TLEVBQVEsU0FDakYsd0JBQVFDLEVBQUssTUFBQSxpQkFBbUJDLEVBQU8sT0FBTyxLQUFLLGNBTXhEWCxFQUlLLEtBSkxHLEVBSUssQ0FISEcsRUFBNENNLEVBQUEsQ0FBbEMsTUFBTSxrQkFBZ0JDLEVBQVEsOENBQVJBLEVBQVEsU0FBQUYsMkJBQ0lFLEVBQVEsY0FBcERDLEVBQWlHTixFQUFBLE9BQTlFLEtBQUssY0FBOEIsTUFBTSwyQ0FDNURNLEVBQWtFTixFQUFBLE9BQS9DLEtBQUssYUFBb0IsTUFBTSJ9
