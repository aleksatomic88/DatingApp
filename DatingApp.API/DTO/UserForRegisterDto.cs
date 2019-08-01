using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTO
{
    public class UserForRegisterDto
    {
        [Required]
        [EmailAddress]
        public string UserName { get; set; }
        
        [Required]
        [StringLength(10, MinimumLength = 4, ErrorMessage = "Password should be 4 to 10 characters long...")]
        public string Password { get; set; }
    }
}