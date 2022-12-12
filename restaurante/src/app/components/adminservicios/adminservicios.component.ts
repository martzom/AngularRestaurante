import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/servicio';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-adminservicios',
  templateUrl: './adminservicios.component.html',
  styleUrls: ['./adminservicios.component.css']
})
export class AdminserviciosComponent implements OnInit {
  servicios:Servicio[];

  constructor(private servicioServicio: ServicioService) { }

  ngOnInit(): void {
    this.obtenerServicios();
  }

  private obtenerServicios(){
    this.servicioServicio.obtenerListaDeServicios().subscribe(dato=>{
      this.servicios=dato;
    });
  }
  }



