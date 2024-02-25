import { CommonModule } from '@angular/common';
import { Component, Inject, Optional } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog1',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './my-dialog1.component.html',
  styleUrl: './my-dialog1.component.css'
})
export class MyDialog1Component {
  fromPage!: string;
  fromDialog!: string;

  constructor(
    public dialogRef: MatDialogRef<MyDialog1Component>,
    @Optional() @Inject(MAT_DIALOG_DATA) public mydata: any
  ) { }

  ngOnInit(): void {
    this.fromDialog = "I am from dialog land...";
  }

  closeDialog() { this.dialogRef.close({ event: 'close', data: this.fromDialog }); }
}
