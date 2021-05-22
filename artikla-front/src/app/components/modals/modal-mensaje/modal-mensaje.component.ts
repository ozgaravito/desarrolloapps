import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { modalInfo } from 'src/app/interfaces/modal.info';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';

@Component({
  selector: 'app-modal-mensaje',
  templateUrl: './modal-mensaje.component.html',
  styleUrls: ['./modal-mensaje.component.css']
})
export class ModalMensajeComponent implements OnInit {

  @Input() modalInfo : modalInfo;
  @Output() modalConfirmado = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.modalInfo);
  }

  modalConfirmar(opcion : boolean) {
    this.modalConfirmado.emit(opcion);
  }

}
