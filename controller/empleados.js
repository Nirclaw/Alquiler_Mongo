var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class PostEmpleado {
    constructor(data) {
        Object.assign(this, data);
        Object.assign(this, data);
        this.nombre = "";
        this.apellido = "";
        this.id_empleado = 0;
        this.telefono = 0;
        this.direccion = "";
        this.cargo = "";
    }
}
__decorate([
    Expose({ name: "id_empleado" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el id" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], PostEmpleado.prototype, "id_empleado", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], PostEmpleado.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "apellido" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el apellido" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], PostEmpleado.prototype, "apellido", void 0);
__decorate([
    Expose({ name: "cc" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en la cedula" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], PostEmpleado.prototype, "dni", void 0);
__decorate([
    Expose({ name: "direccion" }),
    __metadata("design:type", String)
], PostEmpleado.prototype, "direccion", void 0);
__decorate([
    Expose({ name: "telefono" }),
    __metadata("design:type", Number)
], PostEmpleado.prototype, "telefono", void 0);
__decorate([
    Expose({ name: "cargo" }),
    Transform(({ value }) => {
        if (/\S+@\S+.\S+/.test(value))
            return value;
        else
            throw { status: 400, message: "El correo no cumple con los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], PostEmpleado.prototype, "cargo", void 0);
