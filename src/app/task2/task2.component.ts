import { Component, OnInit,Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog , MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'show-dialog',
  templateUrl : './add-edit-list.html' 
})
export class DialogComponent {

  taskName : string = '';
  selectedList : any ;
  lists : any = [{ name : 'Started' , value : 2 } , { name : 'To Do' , value :1 }, { name : 'Done' , value :3 }];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Task2Component>, private dataService : DataService) {
    if(data != null)
    {
      this.taskName = data.item;
      this.selectedList = data.listNumber;
    }
    }

    getListFromNumber(number:number)
    {
      let list : Array<any> = [];
      switch(number){
        case 1:
        list = this.dataService.todo;
        break;
        case 2:
        list =  this.dataService.started;
        break;
        case 3:
        list =  this.dataService.done;
        break;
      }
      return list;
    }

    moveToList(form: NgForm)
    {
        if(this.selectedList ==1)
        {
          if(this.selectedList == this.data.listNumber)
          {  // Check if the source and the target list are same
            var check =  this.checkDuplicate(this.dataService.todo , this.taskName);
            if(check == true)
            {
              var index = this.dataService.todo.indexOf(this.data.item);
              this.dataService.todo[index] = this.taskName;
              this.dialogRef.close();
            }
            else  alert('Duplicates not allowed');
        }
        else {
          var check =  this.checkDuplicate(this.dataService.todo , this.taskName);
          if(check == true)
          {
            var list = this.getListFromNumber(this.data.listNumber);
            var index = list.indexOf(this.data.item);
            list.splice(index,1);
            this.dataService.todo.push(this.taskName);
            this.dialogRef.close();
          }
         }
        }
        if(this.selectedList ==2)
        {
          if(this.selectedList == this.data.listNumber)
          {  // Check if the source and the target list are same
            var check =  this.checkDuplicate(this.dataService.started , this.taskName);
            if(check == true)
            {
              var index = this.dataService.started.indexOf(this.data.item);
              this.dataService.started[index] = this.taskName;
              this.dialogRef.close();
       
            }
            else  alert('Duplicates not allowed');
       
        }
        else {
          var check =  this.checkDuplicate(this.dataService.started , this.taskName);
          if(check == true)
          {
            var list = this.getListFromNumber(this.data.listNumber);
            var index = list.indexOf(this.data.item);
            list.splice(index,1);
            this.dataService.started.push(this.taskName);
            this.dialogRef.close();
          }
    
         }
 
        }
        if(this.selectedList ==3)
        {
          if(this.selectedList == this.data.listNumber)
          {  // Check if the source and the target list are same
            var check =  this.checkDuplicate(this.dataService.done , this.taskName);
            if(check == true)
            {
              var index = this.dataService.done.indexOf(this.data.item);
              this.dataService.done[index] = this.taskName;
              this.dialogRef.close();
            }
            else  alert('Duplicates not allowed');

        }
        else {
          var check =  this.checkDuplicate(this.dataService.done , this.taskName);
          if(check == true)
          {
            var list = this.getListFromNumber(this.data.listNumber);
            var index = list.indexOf(this.data.item);
            list.splice(index,1);
            this.dataService.done.push(this.taskName);
            this.dialogRef.close();
      
          }
         }
        }
  }

    addToList(form: NgForm)
    {
     
      if(this.selectedList==1){
       var check =  this.checkDuplicate(this.dataService.todo , this.taskName);
       if(check == true)
       {
          this.dataService.todo.push(this.taskName);
       }
       else  alert('Duplicates not allowed');
      }
      else if(this.selectedList==2)
      {
        var check =  this.checkDuplicate(this.dataService.started , this.taskName);
        if(check == true)
         this.dataService.started.push(this.taskName);
        else  alert('Duplicates not allowed');
      }
      else
      {
        var check =  this.checkDuplicate(this.dataService.done , this.taskName);
        if(check == true)
         this.dataService.done.push(this.taskName);
        else 
          alert('Duplicates not allowed');
      }
    }

    checkDuplicate(list :any , taskName : string)
    {
      for(var item of list)
      {
        if(item.toLowerCase() == taskName.toLowerCase())
          return false;
      }
      return true;

    }
}

@Component({
  selector: 'app-home',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  constructor(public matDialog : MatDialog,private dataService : DataService) {

   }

  open(){
    this.matDialog.open(DialogComponent,{
        height: '400px',
        width : '500px'
    })
  }

  edit(item : any , listNumber:any)
  {
    console.log('edit',item);
    this.matDialog.open(DialogComponent,{
      height: '400px',
      width : '500px',
      data: { type: 'edit' , item:  item , listNumber:listNumber }
  })
  }

  todo = this.dataService.todo;
  done= this.dataService.done;
  started=  this.dataService.started;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,  event.container.data,  event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit(): void {
  }

}