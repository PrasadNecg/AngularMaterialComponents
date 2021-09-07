import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { ButtonComponent } from './button/button.component';
import { ButtontoggleComponent } from './buttontoggle/buttontoggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { IconsComponent } from './icons/icons.component';
import { InputsComponent } from './inputs/inputs.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressspinnerComponent } from './progressspinner/progressspinner.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SliderComponent } from './slider/slider.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [    
  {path:'',redirectTo:'/autocompletepage',pathMatch:'full'},
  {path:'autocompletepage',component:AutocompleteComponent},
  {path:'badgepage',component:BadgeComponent},
  {path:'bottomsheetpage',component:BottomsheetComponent},
  {path:'buttonpage',component:ButtonComponent},  
  {path:'buttontogglepage',component:ButtontoggleComponent},
  {path:'cardpage',component:CardComponent},
  {path:'checkboxpage',component:CheckboxComponent},  
  {path:'chipspage',component:ChipsComponent},  
  {path:'datepickerpage',component:DatepickerComponent},
  {path:'dialogpage',component:DialogComponent},
  {path:'dividerpage',component:DividerComponent},  
  {path:'expansionpanelpage',component:ExpansionpanelComponent},
  {path:'formfieldpage',component:FormfieldComponent},
  {path:'gridlistpage',component:GridlistComponent},    
  {path:'iconspage',component:IconsComponent},
  {path:'inputspage',component:InputsComponent},  
  {path:'listpage',component:ListComponent},
  {path:'menupage',component:MenuComponent},
  {path:'paginatorpage',component:PaginatorComponent},
  {path:'progressbarpage',component:ProgressbarComponent},  
  {path:'progress_spinnerpage',component:ProgressspinnerComponent},
  {path:'radiobuttonpage',component:RadiobuttonComponent},  
  {path:'ripplespage',component:RipplesComponent},
  {path:'selectpage',component:SelectComponent},  
  {path:'sidenavpage',component:SidenavComponent},
  {path:'slidetogglepage',component:SlidetoggleComponent},  
  {path:'sliderpage',component:SliderComponent},
  {path:'snackbarpage',component:SnackbarComponent},  
  {path:'sortheaderpage',component:SortHeaderComponent},
  {path:'stepperpage',component:StepperComponent},  
  {path:'tablepage',component:TableComponent},
  {path:'tabspage',component:TabsComponent},
  {path:'toolbarpage',component:ToolbarComponent},
  {path:'tooltip_page',component:TooltipComponent},
  {path:'treepage',component:TreeComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
