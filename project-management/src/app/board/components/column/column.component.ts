import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { ModalType } from 'src/app/share/constants/constants';
import { IColumn } from 'src/app/share/models/column.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input() fromBoard!: {
    column: IColumn;
    boardId: string;
  };

  columnTitle = '';

  isEditColumnTitle = false;

  constructor(private modalService: ModalService) {}

  deleteColumn(id: string) {
    this.modalService.openConfirmDelete(ModalType.COLUMN, this.fromBoard.boardId, id);
  }

  createTask(columnId: string) {
    this.modalService.openCreateMod(
      ModalType.CREATE,
      ModalType.TASK,
      this.fromBoard.boardId,
      columnId,
    );
  }

  setEditMode() {
    this.isEditColumnTitle = true;
  }

  editTask(id: string) {
    this.modalService.openCreateMod(
      ModalType.UPDATE,
      ModalType.TASK,
      this.fromBoard.boardId,
      this.fromBoard.column.id,
      id,
    );
  }
}
