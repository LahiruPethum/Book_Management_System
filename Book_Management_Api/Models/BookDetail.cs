using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Book_Management_Api.Models
{
    public class BookDetail
    {
        [Key]
        public int BookId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string BookName { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string SerialNo { get; set; }

        [Column(TypeName = "nvarchar(5)")]
        public string Date { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Author { get; set; }
    }
}
