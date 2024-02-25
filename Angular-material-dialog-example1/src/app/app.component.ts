import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDialogModule, CommonModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-material-dialog-example1';

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do']

  constructor(public dialog: MatDialog) { }

  openTempDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef, { data: this.myFooList });
    myTempDialog.afterClosed().subscribe((res) => {

      // Data back from dialog
      console.log({ res });
    });
  }
}
