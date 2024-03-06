using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebTerminal.Controllers
{
    [ApiController]
    [Route("/server")]
    public class ConsoleController : ControllerBase
    {
        [HttpGet()]
        public IActionResult GetMain()
        {
            string message = "Main Server EndPoint";
            return Ok(new { Text = message });
        }

        [HttpGet("test")]
        public IActionResult GetTest()
        {
            string message = "Hello From Server";
            return Ok(new { Text = message });
        }

        [HttpPost("post")]
        public async Task<IActionResult> PostData([FromBody] YourModelType data)
        {
            // Handle the incoming data here
            // YourModelType should be replaced with the actual model type of the incoming data

            // For example:
            string receivedData = data.key1;

            string responseMessage = "Data received successfully";
            return Ok(new {
                 Text = responseMessage,
                 Message = receivedData
                 });
        }

        public class YourModelType
{
    public string key1 { get; set; }
}

    }
}
