// required modules
import { serve } from "https://deno.land/std@0.147.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.147.0/http/file_server.ts";
import { resolve } from "https://deno.land/std@0.97.0/path/mod.ts";

// handles server request
function handler(req: Request): Promise<Response> {
  // serves file under src directory
  return serveDir(req, {
    fsRoot: resolve(Deno.cwd(), "src"),
    showDirListing: true
  });
}

serve(handler, { port: 8000 }); // serves the application on port 8000
