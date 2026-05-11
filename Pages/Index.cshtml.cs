using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic; // Necesario para usar List<>

namespace GNC_RENTAL.Pages
{
    public class IndexModel : PageModel
    {
        // 1. Creamos una lista pública para que el HTML pueda leerla
        public List<Maquina> Maquinas { get; set; } = new List<Maquina>();

        // 2. Guardamos el número de WhatsApp aquí
        public string NumeroWhatsApp { get; set; } = "56985555741";

        // El método OnGet se ejecuta automáticamente cada vez que alguien entra a la página
        public void OnGet()
        {
            // 3. Llenamos la lista de máquinas antes de mostrar la página
            Maquinas = new List<Maquina>
            {
                new Maquina { Nombre = "Grúa Horquilla 2 Ton.", Tipo = "Toyota", Caracteristicas = "Mástil triple, motor a gas.", ImagenUrl = "https://via.placeholder.com/600x400?text=Grua+Horquilla" },
                new Maquina { Nombre = "Tijera articulada de 10", Tipo = "HAULOTTE", Caracteristicas = "Equipos eléctricos de 10 metros.", ImagenUrl = "https://via.placeholder.com/600x400?text=Tijera+10m" },
                new Maquina { Nombre = "Brazo de articulado 16 MTS", Tipo = "JLG", Caracteristicas = "Brazo articulado de 16 metros.", ImagenUrl = "https://via.placeholder.com/600x400?text=Brazo+16m" }
            };
        }
    }

    // 4. Definimos el "Molde" (Clase) de cómo debe ser una máquina. 
    // Esto asegura que nunca te equivoques al escribir "Tipo" o "Marca".
    public class Maquina
    {
        public string? Nombre { get; set; }
        public string? Tipo { get; set; }
        public string? Caracteristicas { get; set; }
        public string? ImagenUrl { get; set; }
    }
}